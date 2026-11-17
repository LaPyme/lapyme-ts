# GetApiPurchaseByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "purchase",
      id: "377416ec-a84f-4d73-b892-cbb8ddb48c44",
      tags: [
        {
          object: "tag",
          id: "b4c64393-84ca-458c-8f3b-39718b070484",
          scope: "transfer",
          name: "<value>",
          slug: "<value>",
          color: "pink",
          description: "delectable astride downright",
          archivedAt: new Date("2024-08-12T06:34:32.349Z"),
          createdAt: new Date("2024-10-25T15:17:34.484Z"),
          updatedAt: new Date("2024-11-10T16:15:42.311Z"),
        },
      ],
      voucherType: "<value>",
      importDocumentRole: "commercial_invoice",
      importSourcePurchaseId: "aba975a3-99b6-4021-92a8-2b75ca998fb6",
      importNationalizationStatus: "pending_nationalization",
      costTargetPurchaseId: "6c58c861-c3ed-42bf-897c-c53408f2eb6e",
      customsDispatchNumber: null,
      supplierInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: "<value>",
      paymentTermId: null,
      paymentTermDays: 939711,
      vatPerceptionAmount: 887210,
      nationalTaxAmount: 901200,
      grossIncomeTaxAmount: null,
      grossIncomeTaxBreakdown: [
        {
          provinceId: 21946,
          amount: 725025,
        },
      ],
      municipalTaxAmount: 884934,
      internalTaxAmount: 131893,
      otherTaxAmount: 407047,
      subtotal: 287276,
      taxAmount: 976564,
      exemptAmount: 728860,
      total: 170985,
      balance: 998921,
      discount: 387896,
      vatBreakdown: [],
      notes: "<value>",
      vatCategory: "services",
      currency: "Rial Omani",
      exchangeRate: "<value>",
      pdfPath: "<value>",
      document: {
        status: "pending",
        url: "https://old-fashioned-possession.biz/",
      },
      createdAt: new Date("2026-12-23T08:37:17.302Z"),
      supplier: {
        id: "962e55fe-e442-44fe-b540-5cb58faea196",
        name: "<value>",
        email: "Koby47@hotmail.com",
        phone: "1-494-382-3196 x22047",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        address: "35826 Dickens Plain",
        city: "Perth Amboy",
        provinceId: "<id>",
        postalCode: null,
        paymentTermId: "<id>",
        paymentTermDays: 65924,
      },
      warehouse: {
        id: "0978f48b-ba46-4ec8-b56c-32d7bd1637ff",
        name: "<value>",
      },
      productsReceived: true,
      productsReturned: true,
      inventoryEffect: "none",
      items: [
        {
          id: "b537c985-7450-4aa0-a4cf-af19d96936a3",
          name: null,
          quantity: 7439.4,
          unitCost: 34424,
          subtotal: 783836,
          taxRateId: 551950,
          isExempt: false,
          isCustomsCharge: false,
          customsChargeInTaxableBase: false,
          total: 175640,
          discountPercentage: 5675.1,
          purchaseOrderItemId: "260cfa73-eef2-42e9-ad14-f84d18f683ce",
          vatCategory: "leases",
          product: {
            id: "a7198eac-545a-45a2-a30f-54b7c5054e0c",
            sku: null,
            name: "<value>",
            productType: "combo",
          },
          purchaseOrder: {
            id: "fd6d99b5-2caa-43bb-8c5b-ac7477425265",
            formattedOrderNumber: "<value>",
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiPurchaseDetailResponse](../../models/api-purchase-detail-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |