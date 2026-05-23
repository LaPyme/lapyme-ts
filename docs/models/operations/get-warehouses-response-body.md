# GetWarehousesResponseBody

Lista de depósitos obtenida exitosamente

## Example Usage

```typescript
import { GetWarehousesResponseBody } from "lapyme/models/operations";

let value: GetWarehousesResponseBody = {
  success: true,
  data: [
    {
      id: "2995d261-5315-43db-9527-623b8387aae6",
      name: "<value>",
      address: "888 Highfield Road",
      isDefault: true,
      isActive: false,
    },
  ],
  pagination: {
    page: 9436.82,
    limit: 9161.59,
    total: 9120.3,
    totalPages: 8263.04,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `success`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             | true                                            |
| `data`                                          | [models.Warehouse](../../models/warehouse.md)[] | :heavy_check_mark:                              | N/A                                             |                                                 |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | N/A                                             |                                                 |