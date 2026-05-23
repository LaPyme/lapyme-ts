# UpdateApiWarehouseRequest

## Example Usage

```typescript
import { UpdateApiWarehouseRequest } from "lapyme/models/operations";

let value: UpdateApiWarehouseRequest = {
  warehouseId: "db657f1c-fd8d-4b9c-af4f-81a14e056bde",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `warehouseId`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | ID del depósito                                                                     |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiWarehouseUpdateRequest](../../models/api-warehouse-update-request.md)    | :heavy_check_mark:                                                                  | N/A                                                                                 |