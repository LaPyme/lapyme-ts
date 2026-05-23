# CreateApiSupplierRequest

## Example Usage

```typescript
import { CreateApiSupplierRequest } from "lapyme/models/operations";

let value: CreateApiSupplierRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.ApiSupplierMutationRequest](../../models/api-supplier-mutation-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |