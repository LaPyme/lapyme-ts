# ListApiVoucherTypesResponse

## Example Usage

```typescript
import { ListApiVoucherTypesResponse } from "lapyme/models/operations";

let value: ListApiVoucherTypesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "voucher_type_reference",
        code: 208717,
        abbreviation: "<value>",
        documentKind: "invoice",
        letter: "A",
        description: "vaguely grouper finally interviewer educated",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://dreary-gastropod.biz",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [models.ApiVoucherTypeReferenceListResponse](../../models/api-voucher-type-reference-list-response.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |