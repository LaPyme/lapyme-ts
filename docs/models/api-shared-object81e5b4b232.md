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
      id: "586ed816-db62-4ab9-ba3c-8b36956520a8",
      orderLineId: "6b7efaf5-00a3-4c12-be58-add5fb7023c1",
      productId: "b50c851e-6128-4c8b-b471-a114cb343c6f",
      productName: "<value>",
      sku: "<value>",
      variantOptions: {},
      optionNames: [
        "<value 1>",
      ],
      quantity: 5023.4,
      orderedQuantity: 2606.98,
      unitPrice: 81123,
      discountPercentage: 7190.4,
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