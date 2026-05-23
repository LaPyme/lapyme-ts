# ApiSharedObject7f109ef840

## Example Usage

```typescript
import { ApiSharedObject7f109ef840 } from "lapyme/models";

let value: ApiSharedObject7f109ef840 = {
  object: "fulfillment_order",
  id: "aa75a7ba-a2bc-4b64-928a-e706aa058576",
  status: "closed",
  assignedWarehouseId: "b1abaacf-daf2-4f93-a447-ace0617d0632",
  assignedWarehouseName: "<value>",
  deliveryMethod: "shipping",
  requestedAt: new Date("2025-01-14T08:21:30.480Z"),
  startedAt: new Date("2025-02-12T04:33:35.296Z"),
  closedAt: new Date("2025-12-01T00:29:23.307Z"),
  cancelledAt: new Date("2024-08-29T02:05:27.361Z"),
  notes: "<value>",
  lines: [
    {
      id: "0625167e-cd2f-4b81-a3fa-363aa9dcb05d",
      orderLineId: "92280f98-e86b-4624-bc3d-1ed962ff51e1",
      productId: "50a33d83-d5a9-43e9-916f-84d0e4e31de8",
      productName: "<value>",
      sku: "<value>",
      quantity: 807360,
      fulfilledQuantity: 115870,
      cancelledQuantity: 424424,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"fulfillment_order"*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnum19a9b49403](../models/api-shared-enum19a9b49403.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `assignedWarehouseId`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `assignedWarehouseName`                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryMethod`                                                                              | [models.ApiSharedEnumcc76b6d63a](../models/api-shared-enumcc76b6d63a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObject7d7d99f458](../models/api-shared-object7d7d99f458.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |