# ListApiRemitosResponse

## Example Usage

```typescript
import { ListApiRemitosResponse } from "lapyme/models/operations";

let value: ListApiRemitosResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        id: "68f8714c-9876-47ad-9d41-cc6f24c220fd",
        number: "<value>",
        date: new Date("2026-11-07"),
        customer: {
          id: "19e08252-4cae-48ce-af51-86ddbd090f69",
          name: "<value>",
        },
        origin: {
          type: "sale",
          saleId: "dbbaee62-3ac7-4658-bd06-2032f062890d",
        },
        created: new Date("2025-12-14T12:35:14.751Z"),
      },
    ],
    hasMore: true,
    nextCursor: null,
    object: "list",
    url: "https://steep-sundae.org/",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiRemitoListResponse](../../models/api-remito-list-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |