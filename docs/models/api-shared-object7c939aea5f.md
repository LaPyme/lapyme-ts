# ApiSharedObject7c939aea5f

## Example Usage

```typescript
import { ApiSharedObject7c939aea5f } from "lapyme/models";

let value: ApiSharedObject7c939aea5f = {
  id: "1afcf6ef-ea5f-4dc6-abb0-5a6c023c7f50",
  status: "cancelled",
  warehouseId: "436bb715-60d1-4b1e-bd24-1eec185266f0",
  warehouseName: null,
  deliveryMethod: "pickup",
  requestedAt: new Date("2024-02-24T15:42:38.635Z"),
  startedAt: new Date("2024-09-10T02:28:50.399Z"),
  closedAt: new Date("2024-06-03T04:49:00.534Z"),
  cancelledAt: new Date("2024-08-09T08:26:24.430Z"),
  notes: "<value>",
  lines: [
    {
      id: "0d9a5512-a86c-43a6-9f84-ae1caf124b49",
      orderLineId: "99f766d8-c073-4e9a-b7d4-4da26583e985",
      productId: "18ab144a-35f0-4dfa-858e-45ea0927e6d7",
      productName: "<value>",
      sku: "<value>",
      quantity: 579153,
      fulfilledQuantity: 475821,
      cancelledQuantity: 446755,
      pendingQuantity: 344893,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnum19a9b49403](../models/api-shared-enum19a9b49403.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `warehouseName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryMethod`                                                                              | [models.ApiSharedEnumcc76b6d63a](../models/api-shared-enumcc76b6d63a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObject6c57d6c299](../models/api-shared-object6c57d6c299.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |