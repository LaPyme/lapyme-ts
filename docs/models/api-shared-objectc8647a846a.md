# ApiSharedObjectc8647a846a

## Example Usage

```typescript
import { ApiSharedObjectc8647a846a } from "lapyme/models";

let value: ApiSharedObjectc8647a846a = {
  id: "96a578dd-7dd8-443a-af1d-35baa81ffabc",
  status: "closed",
  warehouseId: "04e6a4bd-bca3-40c7-b750-fcae38bae192",
  warehouseName: "<value>",
  deliveryMethod: "local_delivery",
  requestedAt: new Date("2026-09-02T17:53:02.532Z"),
  startedAt: new Date("2024-03-04T23:50:09.082Z"),
  closedAt: new Date("2024-05-25T23:35:28.244Z"),
  cancelledAt: new Date("2025-09-15T11:24:46.386Z"),
  notes: "<value>",
  lines: [
    {
      id: "54e86697-bbea-44ec-b8dd-037bcb148f80",
      orderLineId: "fb3a8075-5abc-474e-aaf4-301c21413d4a",
      productId: "5b7b123b-22e2-4760-a523-908a0a7d3ded",
      productName: "<value>",
      sku: "<value>",
      quantity: 9685.42,
      fulfilledQuantity: 2343.32,
      cancelledQuantity: 3269.9,
      pendingQuantity: 7196.93,
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
| `lines`                                                                                       | [models.ApiSharedObject4052bad07b](../models/api-shared-object4052bad07b.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |