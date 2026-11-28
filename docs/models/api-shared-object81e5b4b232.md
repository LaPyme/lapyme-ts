# ApiSharedObject81e5b4b232

## Example Usage

```typescript
import { ApiSharedObject81e5b4b232 } from "lapyme/models";

let value: ApiSharedObject81e5b4b232 = {
  object: "order_preparation",
  id: "16181e69-4e38-4301-a81a-da08c04c15cc",
  preparedAt: new Date("2026-11-18T14:16:00.294Z"),
  warehouseName: "<value>",
  deliveryMethod: "local_delivery",
  remitoDeliveryId: "f509514a-358d-4985-8cf5-b764d89ba2bb",
  formattedRemitoNumber: "<value>",
  lines: [
    {
      id: "86c3a6f8-4ae1-4caf-b124-b49799f766d8",
      orderLineId: "073e9a7d-44da-4265-a83e-985e418ab144",
      productId: "5f0dfa58-e45e-4a09-927e-6d7197754d67",
      productName: "<value>",
      sku: "<value>",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
      },
      optionNames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      quantity: 2112.23,
      orderedQuantity: 20.7,
      unitPrice: 202146,
      discountPercentage: 7024.87,
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
| `lines`                                                                                       | [models.ApiSharedObjecta83bae2379](../models/api-shared-objecta83bae2379.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |