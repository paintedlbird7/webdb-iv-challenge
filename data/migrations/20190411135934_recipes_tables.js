exports.up = function(knex, Promise) {
    // the tables must be created in the right order,
    // tables with FK are created after the referenced table is created
    
    // recipes = tracks
    // ingredients = students
    // dish = cohort

    // cohort_students = dish_ingredients


    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
      })
      
      
      .createTable('dish', tbl => {
        // the recipes table must be created before this table is created
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
  
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT') // explain cascading
          .onUpdate('CASCADE');
      })
      
      
      .createTable('ingredients', tbl => {
        tbl.increments();
  
        tbl.string('name', 128).notNullable();
      })
      
      
      .createTable('dish_ingredients', tbl => {
        // the students and cohorts tables must be created before this table is created
        tbl.increments();
  
        tbl
          .integer('dish_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dish')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
  
        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      });
  };
  
  exports.down = function(knex, Promise) {
    // tables with FK must be removed before the referenced table is removed
    return knex.schema
    //   .dropTableIfExists('cohort_students')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('dish');
  }
