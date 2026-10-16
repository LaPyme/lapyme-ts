# CreateApiStockTransferResponse

## Example Usage

```typescript
import { CreateApiStockTransferResponse } from "lapyme/models/operations";

let value: CreateApiStockTransferResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      transfer: {
        id: "8a790fb8-cea1-4b04-9360-9aa46dbdd078",
        organizationId: "79a976dc-0103-4f91-8b83-d8dae7b8ee20",
        sourceWarehouseId: "87e9780e-8232-4889-9c66-942b84810160",
        targetWarehouseId: "4e9c9a95-7dab-423c-a04a-17a349989460",
        transferNumber: 658584,
        formattedTransferNumber: "<value>",
        transferDate: new Date("2026-10-26T08:07:38.511Z"),
        notes: "<value>",
        status: "completed",
        createdAt: new Date("2026-02-09T08:25:18.767Z"),
        updatedAt: new Date("2026-09-17T14:50:27.409Z"),
        createdBy: "<value>",
        updatedBy: "<value>",
        sourceWarehouse: {
          id: "7aa94cab-290a-4268-8749-e7435e10838d",
          name: "<value>",
        },
        targetWarehouse: {
          id: "e33fb221-93a9-4b25-83b1-4e9cce912575",
          name: "<value>",
        },
        items: [],
      },
      idempotentReplay: true,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [models.ApiStockTransferSuccessResponse](../../models/api-stock-transfer-success-response.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |