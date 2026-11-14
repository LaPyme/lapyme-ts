# CreateApiCustomerResponse

## Example Usage

```typescript
import { CreateApiCustomerResponse } from "lapyme/models/operations";

let value: CreateApiCustomerResponse = {
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
        defaultDiscountPercentage: 9624.95,
        defaultPriceListIsBase: false,
        paymentTermId: "<id>",
        paymentTermDays: 206639,
        provinceId: "<id>",
        isActive: true,
        createdAt: new Date("2026-11-26T11:04:29.864Z"),
        updatedAt: new Date("2026-08-10T00:19:08.292Z"),
        tags: [],
        defaultAccountId: "87d78208-7876-48de-814f-02c8983137b9",
        metafields: [
          {
            definitionId: "07615c86-2c45-4dc1-9c88-870aac3b9034",
            value: "<value>",
          },
        ],
        arcaDestinationCountry: 244998,
        foreignTaxId: "<id>",
        arcaCountryTaxId: "<id>",
        country: "Greece",
        postalCode: "60879-4931",
        assignedSalespersonId: "1157d696-c066-42b7-9bd2-a9332fca9a03",
        defaultGananciasRegimen: "<value>",
        assignedSalesperson: {
          id: "0599b9d8-9d29-4f93-a7b3-2dfb87783371",
          fullName: "Chad Witting",
        },
        defaultPriceList: {
          id: "ab940a56-d994-4de4-bb02-c42b3df9b1aa",
          name: "<value>",
        },
        salesOverview: {
          pendingBalance: 1365.89,
          salesCount: 536697,
          totalSales: 1550.28,
          recentSales: [
            {
              id: "01efec15-a4bb-4938-a67c-cab0c76e2c04",
              voucherType: "<value>",
              invoiceStatus: "<value>",
              invoiceDate: "<value>",
              currency: "Rupiah",
              total: 5004.72,
              formattedInvoiceNumber: "<value>",
              originalSaleId: "<id>",
              createdAt: new Date("2024-06-21T23:52:04.412Z"),
            },
          ],
        },
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
| `result`                                                                         | [models.ApiCustomerCreateResponse](../../models/api-customer-create-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |