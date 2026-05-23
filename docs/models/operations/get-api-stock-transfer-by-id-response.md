# GetApiStockTransferByIdResponse

## Example Usage

```typescript
import { GetApiStockTransferByIdResponse } from "lapyme/models/operations";

let value: GetApiStockTransferByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "stock_transfer",
      id: "21d421f4-f865-4adf-b435-d30aa916a3d8",
      organizationId: "d2519b8f-7650-4870-9609-8571439c5aae",
      sourceWarehouseId: "38e22426-53a8-4a8a-a4ad-4771d6a50268",
      targetWarehouseId: "5283156d-d2df-46e8-85ae-839b3f4a8912",
      transferDate: new Date("2026-03-20T12:50:11.407Z"),
      notes: "<value>",
      status: "completed",
      createdAt: new Date("2026-04-28T05:47:30.323Z"),
      updatedAt: new Date("2025-12-30T02:51:34.734Z"),
      createdBy: "812da217-0912-4faa-b34f-dc09b64999c6",
      updatedBy: "6cd42fc6-354f-4a4d-9ae6-2bb6eb2ee7ac",
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiTransferDetailResponse](../../models/api-transfer-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |