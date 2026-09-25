# ApiSharedObject024b1713ed

## Example Usage

```typescript
import { ApiSharedObject024b1713ed } from "lapyme/models";

let value: ApiSharedObject024b1713ed = {
  id: "7c1e225f-b673-4e13-97c5-67eb3d608c61",
  status: "closed",
  warehouseId: "e20ab154-2c39-4011-a061-74c01d73d3d6",
  warehouseName: "<value>",
  deliveryMethod: "pickup",
  requestedAt: new Date("2024-11-11T13:19:41.966Z"),
  startedAt: null,
  closedAt: null,
  cancelledAt: new Date("2025-10-05T00:06:41.654Z"),
  notes: "<value>",
  lines: [],
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