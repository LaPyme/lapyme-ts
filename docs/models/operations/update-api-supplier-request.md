# UpdateApiSupplierRequest

## Example Usage

```typescript
import { UpdateApiSupplierRequest } from "lapyme/models/operations";

let value: UpdateApiSupplierRequest = {
  supplierId: "4ed687b6-d556-4cd9-925f-1997eed59251",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `supplierId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `idempotencyKey`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `body`                                                                         | [models.ApiSupplierUpdateRequest](../../models/api-supplier-update-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |