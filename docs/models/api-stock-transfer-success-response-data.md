# ApiStockTransferSuccessResponseData

## Example Usage

```typescript
import { ApiStockTransferSuccessResponseData } from "lapyme/models";

let value: ApiStockTransferSuccessResponseData = {
  transfer: {
    id: "8a790fb8-cea1-4b04-9360-9aa46dbdd078",
    organizationId: "79a976dc-0103-4f91-8b83-d8dae7b8ee20",
    sourceWarehouseId: "987e9780-e823-4288-89c6-6942b8481016",
    targetWarehouseId: "6a4e9c9a-957d-4ab2-93c0-4a17a3499894",
    transferNumber: null,
    formattedTransferNumber: "<value>",
    transferDate: new Date("2026-09-23T12:09:48.683Z"),
    notes: "<value>",
    status: "cancelled",
    createdAt: new Date("2026-10-26T08:07:38.511Z"),
    updatedAt: new Date("2025-02-27T19:07:15.669Z"),
    createdBy: "<value>",
    updatedBy: "<value>",
    sourceWarehouse: {
      id: "bea67aa9-4cab-4290-aa26-8749e7435e10",
      name: "<value>",
    },
    targetWarehouse: {
      id: "38d07e33-fb22-4193-8a9b-253b14e9cce9",
      name: "<value>",
    },
    items: [],
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `transfer`                               | [models.Transfer](../models/transfer.md) | :heavy_check_mark:                       | N/A                                      |
| `idempotentReplay`                       | *boolean*                                | :heavy_check_mark:                       | N/A                                      |