# UpdateApiWarehouseResponse

## Example Usage

```typescript
import { UpdateApiWarehouseResponse } from "lapyme/models/operations";

let value: UpdateApiWarehouseResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      warehouse: {
        object: "warehouse",
        id: "8b31d3c8-a104-4dc7-905f-b9a297418750",
        name: "<value>",
        address: "4235 S 9th Street",
        isDefault: false,
        isActive: true,
      },
    },
    warnings: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ApiWarehouseUpdateResponse](../../models/api-warehouse-update-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |