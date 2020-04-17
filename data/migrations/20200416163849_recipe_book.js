exports.up = function (knex) {
    return (
      knex.schema
        // recipes
        .createTable("recipes", tbl => {
            tbl.increments("id").primary();
  
          tbl.string("RecipeName", 255).notNullable().unique();
        })
  
        // ingredients
        .createTable("ingredients", tbl => {
            tbl.increments("id").primary();
  
          tbl.string("IngredientName", 255).notNullable().index();
        })
  
        // steps
        .createTable("steps", tbl => {
         tbl.increments("id").primary();
  
          tbl.string("instruction", 255).notNullable().index();
          tbl.decimal("step_number").notNullable().index();
          // foreign key
          tbl
            .int("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
            .onUpdate("CASCADE");
        })
  
        // Recipe_Ingredients
        .createTable("recipe_ingredients", tbl => {
          tbl.increments("id").primary();
  
          tbl.decimal("quantity").notNullable();
  
          tbl
            .int("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
            .onUpdate("CASCADE");
  
          tbl
            .int("ingredient_id")
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
            .onUpdate("CASCADE");
  
          tbl.unique(["recipe_id", "ingredient_id"]);
        })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("recipes")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("steps")
      .dropTableIfExists("recipe_ingredients")
  };
  