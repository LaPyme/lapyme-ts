# ApiDeliveryNoteCreateRequestUnion


## Supported Types

### `models.ApiDeliveryNoteCreateRequest1`

```typescript
const value: models.ApiDeliveryNoteCreateRequest1 = {
  origin: {
    type: "sale",
    saleId: "30955195-e9de-4e71-aceb-e451539c98d6",
  },
};
```

### `models.ApiDeliveryNoteCreateRequest2`

```typescript
const value: models.ApiDeliveryNoteCreateRequest2 = {
  origin: {
    type: "custom",
  },
  customerId: "5b3fcbd1-029b-433f-b63e-1cc13637b2ae",
  pointOfSaleId: "55d6351b-c144-4472-88f6-399cf95788d5",
  items: [
    {
      name: "<value>",
      isCustom: true,
      quantity: 5600.62,
    },
  ],
};
```

