/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_RhpPvoc` ON `icons` (`index`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  collection.indexes = []

  return dao.saveCollection(collection)
})
