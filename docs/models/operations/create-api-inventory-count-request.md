# CreateApiInventoryCountRequest

## Example Usage

```typescript
import { CreateApiInventoryCountRequest } from "lapyme/models/operations";

let value: CreateApiInventoryCountRequest = {
  idempotencyKey: "<value>",
  body: {
    warehouseId: "c924e741-7efe-4732-ba8d-e422140bcb53",
    type: "partial",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `idempotencyKey`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `body`                                                                         | [models.ApiInventoryCountRequest](../../models/api-inventory-count-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |