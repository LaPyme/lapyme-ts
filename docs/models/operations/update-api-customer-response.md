# UpdateApiCustomerResponse

## Example Usage

```typescript
import { UpdateApiCustomerResponse } from "lapyme/models/operations";

let value: UpdateApiCustomerResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      customer: {
        object: "customer",
        id: "124021ad-e99e-4955-978d-e71868e4365e",
        code: null,
        name: "<value>",
        companyName: "Konopelski - Gulgowski",
        description:
          "ah eggplant noteworthy abaft sun boo usually utilization an design",
        email: null,
        phone: "(961) 881-4158 x67959",
        address: "809 Gleason Spur",
        apartment: "<value>",
        city: "South Theo",
        deliveryCarrier: "<value>",
        deliveryAddress: "<value>",
        taxId: null,
        taxIdType: "<value>",
        taxCategory: "<value>",
        contactType: "<value>",
        defaultPriceListId: "4f2f5f7e-813a-42a4-b570-acbad72b0137",
        defaultPriceListIsBase: false,
        paymentTermId: "<id>",
        paymentTermDays: 437286,
        provinceId: "<id>",
        isActive: true,
        createdAt: new Date("2026-04-24T04:15:21.859Z"),
        updatedAt: new Date("2024-04-05T11:39:56.260Z"),
        tags: [
          {
            object: "tag",
            id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
            scope: "purchase_order",
            name: "<value>",
            slug: "<value>",
            color: "yellow",
            description: "natural huzzah heavenly",
            archivedAt: new Date("2024-12-06T02:21:59.305Z"),
            createdAt: new Date("2024-02-28T10:14:14.640Z"),
            updatedAt: new Date("2025-08-18T02:43:21.277Z"),
          },
        ],
        defaultAccountId: "4987d782-0878-4768-ade1-4f02c8983137",
        metafields: [
          {
            definitionId: "2c07615c-862c-445d-8c1c-88870aac3b90",
            value: "<value>",
          },
        ],
        arcaDestinationCountry: 358505,
        foreignTaxId: "<id>",
        arcaCountryTaxId: "<id>",
        country: "Luxembourg",
        postalCode: "79608",
        assignedSalespersonId: "f7f52911-57d6-496c-b066-2b7bd2a9332f",
        defaultGananciasRegimen: "<value>",
        assignedSalesperson: {
          id: "a0376e05-99b9-4d89-9d29-f937b32dfb87",
          fullName: "Josephine Botsford",
        },
        defaultPriceList: {
          id: "e3ef4aab-940a-456d-b994-de4b02c42b3d",
          name: "<value>",
        },
        salesOverview: {
          pendingBalance: 5696.46,
          salesCount: 719734,
          totalSales: 907.41,
          recentSales: [
            {
              id: "af282b01-efec-415a-94bb-93867ccab0c7",
              voucherType: "<value>",
              invoiceStatus: "<value>",
              invoiceDate: "<value>",
              currency: "Pula",
              total: 7997.14,
              formattedInvoiceNumber: null,
              originalSaleId: "<id>",
              createdAt: new Date("2026-03-14T02:12:52.796Z"),
            },
          ],
        },
      },
    },
    warnings: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiCustomerUpdateResponse](../../models/api-customer-update-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |