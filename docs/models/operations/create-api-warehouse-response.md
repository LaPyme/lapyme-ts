# CreateApiWarehouseResponse

## Example Usage

```typescript
import { CreateApiWarehouseResponse } from "lapyme/models/operations";

let value: CreateApiWarehouseResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: {
      warehouse: {
        object: "warehouse",
        id: "63cc75df-5907-4b47-bba6-d9f1dcbe4467",
        name: "<value>",
        address: "490 Turcotte Manor",
        isDefault: true,
        isActive: false,
      },
      idempotentReplay: true,
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ApiWarehouseCreateResponse](../../models/api-warehouse-create-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |