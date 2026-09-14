# ApiSharedObject29d35cb5e8

## Example Usage

```typescript
import { ApiSharedObject29d35cb5e8 } from "lapyme/models";

let value: ApiSharedObject29d35cb5e8 = {
  object: "order_preparation",
  id: "3224437a-daa4-447c-a11b-06c15dfb5d89",
  preparedAt: new Date("2026-04-06T22:48:25.352Z"),
  warehouseName: "<value>",
  deliveryMethod: "pickup",
  remitoDeliveryId: "5abac86a-8f65-4052-b2e7-9b737a4df877",
  formattedRemitoNumber: "<value>",
  lines: [
    {
      id: "cbb5e538-b9e3-4b81-b27f-b08960b8edaa",
      orderLineId: "102152dc-7998-455f-a459-a8bbaa6c5aec",
      productId: "06dc4d91-26bb-4b27-8806-60a91b87f23a",
      productName: "<value>",
      sku: "<value>",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      optionNames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      quantity: 687691,
      orderedQuantity: 494743,
      unitPrice: 852185,
      discountPercentage: 6771.41,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"order_preparation"*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryMethod`                                                                              | [models.ApiSharedEnumcc76b6d63a](../models/api-shared-enumcc76b6d63a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `remitoDeliveryId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedRemitoNumber`                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObjectcb525e9026](../models/api-shared-objectcb525e9026.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |