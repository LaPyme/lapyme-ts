# ListApiTaxRatesResponse

## Example Usage

```typescript
import { ListApiTaxRatesResponse } from "lapyme/models/operations";

let value: ListApiTaxRatesResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://honorable-lay.org",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [models.ApiTaxRateReferenceListResponse](../../models/api-tax-rate-reference-list-response.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |