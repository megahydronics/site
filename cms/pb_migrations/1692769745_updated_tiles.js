/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.indexes = []

  // remove
  collection.schema.removeField("srf42qq3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cboi26xd",
    "name": "key",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_xZrg2U6` ON `tiles` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srf42qq3",
    "name": "key",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("cboi26xd")

  return dao.saveCollection(collection)
})
