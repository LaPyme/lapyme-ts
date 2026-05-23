# CreateWarehouseResponse

## Example Usage

```typescript
import { CreateWarehouseResponse } from "lapyme/models/operations";

let value: CreateWarehouseResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "65de9c6f-b5ca-4730-a30c-1e24c29bfe8d",
      name: "<value>",
      address: "3328 Carlee Cliff",
      isDefault: true,
      isActive: false,
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [models.WarehouseResponse](../../models/warehouse-response.md) | :heavy_check_mark:                                             | N/A                                                            |