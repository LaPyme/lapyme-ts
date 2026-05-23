# UpdateWarehouseByIdRequest

## Example Usage

```typescript
import { UpdateWarehouseByIdRequest } from "lapyme/models/operations";

let value: UpdateWarehouseByIdRequest = {
  id: "wh-123e4567",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID único de la ubicación                                                  | wh-123e4567                                                               |
| `body`                                                                    | [models.CreateWarehouseRequest](../../models/create-warehouse-request.md) | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |