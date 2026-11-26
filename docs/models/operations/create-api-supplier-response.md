# CreateApiSupplierResponse

## Example Usage

```typescript
import { CreateApiSupplierResponse } from "lapyme/models/operations";

let value: CreateApiSupplierResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      supplier: {
        object: "supplier",
        id: "fea26d0a-4f2c-43ec-b7c1-14fe91c39c0c",
        name: "<value>",
        companyName: "Wiegand, Nikolaus and Bradtke",
        description: "sightseeing statement waterspout square plumber ah ha",
        email: "Hans79@hotmail.com",
        phone: "(868) 929-4302",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        paymentTermDays: 138029,
        paymentTermLabel: "<value>",
        paymentTermInstallmentDays: [
          767496,
        ],
        isActive: true,
        tags: [
          {
            object: "tag",
            id: "0e6eb6e2-9039-46b3-b5a8-ca8353449182",
            scope: "purchase_order",
            name: "<value>",
            slug: "<value>",
            color: "blue",
            description:
              "dazzling ack gee inasmuch sheepishly who lowball deliberately",
            archivedAt: new Date("2026-07-18T06:36:50.529Z"),
            createdAt: new Date("2024-07-04T20:30:22.631Z"),
            updatedAt: new Date("2026-01-11T05:59:34.900Z"),
          },
        ],
        defaultAccountId: "1213e900-d3a9-4d96-b658-124d9faf1119",
        country: "Pitcairn Islands",
        provinceId: "<id>",
        city: null,
        address: "498 Prohaska Fork",
        apartment: "<value>",
        postalCode: "64125-5140",
        createdAt: new Date("2024-04-03T17:39:42.222Z"),
        updatedAt: new Date("2026-10-15T05:43:47.991Z"),
      },
      idempotentReplay: true,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiSupplierCreateResponse](../../models/api-supplier-create-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |