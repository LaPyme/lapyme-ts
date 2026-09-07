# CreateApiAccountingAccountResponse

## Example Usage

```typescript
import { CreateApiAccountingAccountResponse } from "lapyme/models/operations";

let value: CreateApiAccountingAccountResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "account",
      id: "25508e0b-8d39-4b0c-beb7-b5e302efc32c",
      code: "<value>",
      name: "<value>",
      description:
        "shallow through boohoo round woot elegantly uh-huh yum cappelletti",
      type: "revenue",
      normalBalance: "debit",
      systemRole: "sales_non_taxable",
      isActive: false,
      isPostable: true,
      parentId: "c8006e51-57fe-4b09-84a3-2355b39f3d05",
      incomeStatementCategory: "other_operating_expense",
      isInflationAdjustable: true,
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [models.ApiAccountingAccountWriteResponse](../../models/api-accounting-account-write-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |