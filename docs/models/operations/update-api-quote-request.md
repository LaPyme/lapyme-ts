# UpdateApiQuoteRequest

## Example Usage

```typescript
import { UpdateApiQuoteRequest } from "lapyme/models/operations";

let value: UpdateApiQuoteRequest = {
  quoteId: "13e7038f-2df7-4b56-a9cc-d76a6f6e5f88",
  idempotencyKey: "<value>",
  body: {
    customerId: "0eda1680-7aeb-4829-a1b8-942dc916b212",
    items: [
      {
        productId: "be5a70a1-77c7-4af2-9e6c-36cafc98cf5f",
        quantity: 89557,
        unitPrice: 30654,
      },
    ],
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `quoteId`                                                       | *string*                                                        | :heavy_check_mark:                                              | ID del presupuesto                                              |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `body`                                                          | [models.ApiQuoteRequest](../../models/api-quote-request.md)     | :heavy_check_mark:                                              | N/A                                                             |