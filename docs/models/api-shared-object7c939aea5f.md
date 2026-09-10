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
      id: "fa2baaab-122b-447e-b372-ee4f6d3bdebf",
      orderLineId: "9bdc5e1c-d323-4d74-845a-ecbbbb334f23",
      productId: "991488b4-9102-48cd-8be1-caf75fe242bc",
      productName: "<value>",
      sku: "<value>",
      quantity: 705737,
      fulfilledQuantity: 407453,
      cancelledQuantity: 980641,
      pendingQuantity: 687409,
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