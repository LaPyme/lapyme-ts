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
      id: "9d9a409e-ff52-4288-a076-441e3aca3969",
      orderLineId: "519bfd32-d5a7-4f40-a51f-377ecebd9e93",
      productId: null,
      productName: "<value>",
      sku: "<value>",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      optionNames: [
        "<value 1>",
      ],
      quantity: 623861,
      orderedQuantity: 354203,
      unitPrice: 256258,
      discountPercentage: 7238.05,
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