# ApiSharedObjectc7aa334b79

## Example Usage

```typescript
import { ApiSharedObjectc7aa334b79 } from "lapyme/models";

let value: ApiSharedObjectc7aa334b79 = {
  object: "order_preparation",
  id: "2e1324b9-ca80-44cb-b7c4-1a59564a2973",
  preparedAt: new Date("2024-04-18T00:51:26.187Z"),
  warehouseName: "<value>",
  deliveryMethod: "local_delivery",
  remitoDeliveryId: "7f2eade6-bd0f-4c82-b9df-b8ec5a2fbc52",
  formattedRemitoNumber: "<value>",
  lines: [
    {
      id: "84e37a0c-fec4-4d12-a9e2-e248dd5a7c01",
      orderLineId: "04264ea2-4216-4be0-a30e-6da9bf6af40b",
      productId: "21ad0b4d-44f8-4932-8b9b-55c1cdf51084",
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
      ],
      quantity: 924003,
      orderedQuantity: 892985,
      unitPrice: 820301,
      discountPercentage: 9171.76,
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
| `lines`                                                                                       | [models.ApiSharedObjectb1bb980a27](../models/api-shared-objectb1bb980a27.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |