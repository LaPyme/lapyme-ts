# ApiSharedObject061bc982d2

## Example Usage

```typescript
import { ApiSharedObject061bc982d2 } from "lapyme/models";

let value: ApiSharedObject061bc982d2 = {
  object: "order_preparation",
  id: "ad8cce21-bbb4-467a-a71b-eeed2fff3b87",
  preparedAt: new Date("2025-01-01T04:12:38.532Z"),
  warehouseName: "<value>",
  deliveryMethod: "pickup",
  remitoDeliveryId: "b9db240c-5f05-4ac3-945f-0e41a4edb08b",
  formattedRemitoNumber: "<value>",
  lines: [
    {
      id: "3c0f0d4d-4a02-40e1-96b4-dad5157c0382",
      orderLineId: "246c2f6e-df98-4a1a-95c7-38741f63acc7",
      productId: "17a886b9-2414-456c-87be-851ac3d93ff3",
      productName: "<value>",
      sku: "<value>",
      variantOptions: {
        "key": "<value>",
      },
      optionNames: [],
      quantity: 867883,
      orderedQuantity: 160145,
      unitPrice: 118715,
      discountPercentage: 6041.02,
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
| `lines`                                                                                       | [models.ApiSharedObjectc0a969419d](../models/api-shared-objectc0a969419d.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |