# UpdateApiWarehouseResponse

## Example Usage

```typescript
import { UpdateApiWarehouseResponse } from "lapyme/models/operations";

let value: UpdateApiWarehouseResponse = {
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
    },
    warnings: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ApiWarehouseUpdateResponse](../../models/api-warehouse-update-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |