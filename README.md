# lapyme

Official TypeScript SDK for La Pyme's public API.

Use La Pyme as the business operations layer for custom backends, scripts,
workers, and automations: customers, products, sales, purchases, inventory,
payments, and reports. The SDK is generated from La Pyme's public OpenAPI
contract with Speakeasy, then complemented with authored examples and recipes.

```bash
pnpm add lapyme
```

```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

const externalOrderId = "shopify-1001";
const customerId = "cus_...";
const pointOfSaleId = "pos_...";
const productId = "prod_...";

const sale = await lapyme.sales.create({
  idempotencyKey: `sale:shopify:${externalOrderId}`,
  body: {
    customerId,
    pointOfSaleId,
    voucherType: 6,
    invoiceDate: new Date("2026-05-24"),
    currency: "PES",
    items: [
      {
        productId,
        quantity: 1,
        unitPrice: 125000,
      },
    ],
  },
});

console.log(sale.result.data.sale.id);
```

Set API keys as `LAPYME_API_KEY` in your server environment and pass that value
to the SDK constructor as `bearerAuth`. Do not expose API keys in browser code.

See [`examples/`](examples/) for copy-pasteable workflows, including
credential checks, sales, purchase orders, reports, and error handling.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=lapyme&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<!-- Start Summary [summary] -->
## Summary

La Pyme API: Resources and workflows for purchases, sales, inventory, contacts, products, reports, and settings.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [lapyme](#lapyme)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Versioning](#versioning)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add lapyme
```

### PNPM

```bash
pnpm add lapyme
```

### Bun

```bash
bun add lapyme
```

### Yarn

```bash
yarn add lapyme
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("lapyme")` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.suppliers.list({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `LAPYME_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.suppliers.list({});

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Categories](docs/sdks/categories/README.md)

* [get](docs/sdks/categories/README.md#get) - Listar categorías
* [create](docs/sdks/categories/README.md#create) - Crear categoría
* [getById](docs/sdks/categories/README.md#getbyid) - Obtener categoría
* [updateCategory](docs/sdks/categories/README.md#updatecategory) - Actualizar categoría

### [CustomerPayments](docs/sdks/customerpayments/README.md)

* [listCustomerPayments](docs/sdks/customerpayments/README.md#listcustomerpayments) - Listar cobranzas de clientes
* [createCustomerPayment](docs/sdks/customerpayments/README.md#createcustomerpayment) - Crear cobranza de cliente
* [getCustomerPayment](docs/sdks/customerpayments/README.md#getcustomerpayment) - Obtener cobranza de cliente
* [void](docs/sdks/customerpayments/README.md#void) - Anular cobranza de cliente

### [Customers](docs/sdks/customers/README.md)

* [get](docs/sdks/customers/README.md#get) - Listar clientes
* [create](docs/sdks/customers/README.md#create) - Crear cliente
* [getCustomerById](docs/sdks/customers/README.md#getcustomerbyid) - Obtener cliente por ID
* [updateCustomer](docs/sdks/customers/README.md#updatecustomer) - Actualizar cliente
* [applyTags](docs/sdks/customers/README.md#applytags) - Aplicar etiquetas a clientes

### [FulfillmentOrders](docs/sdks/fulfillmentorders/README.md)

* [start](docs/sdks/fulfillmentorders/README.md#start) - Iniciar orden de preparación
* [cancelFulfillmentOrder](docs/sdks/fulfillmentorders/README.md#cancelfulfillmentorder) - Cancelar orden de preparación

### [Fulfillments](docs/sdks/fulfillments/README.md)

* [createFulfillment](docs/sdks/fulfillments/README.md#createfulfillment) - Crear fulfillment
* [voidFulfillment](docs/sdks/fulfillments/README.md#voidfulfillment) - Anular fulfillment

### [Inventory](docs/sdks/inventory/README.md)

* [listInventory](docs/sdks/inventory/README.md#listinventory) - Consultar inventario por depósito
* [listInventoryMovements](docs/sdks/inventory/README.md#listinventorymovements) - Listar movimientos de inventario

### [Orders](docs/sdks/orders/README.md)

* [listOrders](docs/sdks/orders/README.md#listorders) - Listar pedidos
* [createOrder](docs/sdks/orders/README.md#createorder) - Crear pedido
* [getOrderById](docs/sdks/orders/README.md#getorderbyid) - Obtener pedido
* [updateOrderNotes](docs/sdks/orders/README.md#updateordernotes) - Actualizar notas del pedido
* [deleteArchived](docs/sdks/orders/README.md#deletearchived) - Eliminar pedido archivado
* [complete](docs/sdks/orders/README.md#complete) - Completar pedido
* [cancel](docs/sdks/orders/README.md#cancel) - Cancelar pedido
* [prepare](docs/sdks/orders/README.md#prepare) - Preparar pedido
* [package](docs/sdks/orders/README.md#package) - Empaquetar pedido
* [unprepare](docs/sdks/orders/README.md#unprepare) - Revertir preparación del pedido
* [changeFulfillmentLocation](docs/sdks/orders/README.md#changefulfillmentlocation) - Cambiar ubicación de preparación
* [unarchive](docs/sdks/orders/README.md#unarchive) - Desarchivar pedido
* [listFulfillmentOrders](docs/sdks/orders/README.md#listfulfillmentorders) - Listar órdenes de preparación del pedido
* [invoice](docs/sdks/orders/README.md#invoice) - Facturar pedido

### [PaymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - Listar métodos de pago
* [create](docs/sdks/paymentmethods/README.md#create) - Crear método de pago
* [get](docs/sdks/paymentmethods/README.md#get) - Obtener método de pago
* [updatePaymentMethod](docs/sdks/paymentmethods/README.md#updatepaymentmethod) - Actualizar método de pago

### [PointsOfSale](docs/sdks/pointsofsale/README.md)

* [listPointsOfSale](docs/sdks/pointsofsale/README.md#listpointsofsale) - Listar puntos de venta

### [PriceLists](docs/sdks/pricelists/README.md)

* [get](docs/sdks/pricelists/README.md#get) - Listar listas de precios
* [createPriceList](docs/sdks/pricelists/README.md#createpricelist) - Crear lista de precios
* [getPriceListById](docs/sdks/pricelists/README.md#getpricelistbyid) - Obtener lista de precios por ID
* [updatePriceList](docs/sdks/pricelists/README.md#updatepricelist) - Actualizar lista de precios

### [ProductBulkAdjustments](docs/sdks/productbulkadjustments/README.md)

* [create](docs/sdks/productbulkadjustments/README.md#create) - Ajustar productos en lote

### [Products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - Listar productos
* [create](docs/sdks/products/README.md#create) - Crear producto
* [getProductById](docs/sdks/products/README.md#getproductbyid) - Obtener producto por ID
* [update](docs/sdks/products/README.md#update) - Actualizar producto
* [applyProductTags](docs/sdks/products/README.md#applyproducttags) - Aplicar etiquetas a productos

### [PurchaseOrders](docs/sdks/purchaseorders/README.md)

* [listPurchaseOrders](docs/sdks/purchaseorders/README.md#listpurchaseorders) - Listar órdenes de compra
* [createPurchaseOrder](docs/sdks/purchaseorders/README.md#createpurchaseorder) - Crear orden de compra
* [getPurchaseOrderById](docs/sdks/purchaseorders/README.md#getpurchaseorderbyid) - Obtener orden de compra por ID
* [confirm](docs/sdks/purchaseorders/README.md#confirm) - Confirmar orden de compra
* [close](docs/sdks/purchaseorders/README.md#close) - Cerrar orden de compra
* [reopen](docs/sdks/purchaseorders/README.md#reopen) - Reabrir orden de compra

#### [PurchaseOrders.Receipts](docs/sdks/receipts/README.md)

* [receive](docs/sdks/receipts/README.md#receive) - Recibir orden de compra

### [Purchases](docs/sdks/purchases/README.md)

* [listPurchases](docs/sdks/purchases/README.md#listpurchases) - Listar compras
* [createPurchase](docs/sdks/purchases/README.md#createpurchase) - Crear compra
* [getPurchaseById](docs/sdks/purchases/README.md#getpurchasebyid) - Obtener compra por ID
* [applyPurchaseTags](docs/sdks/purchases/README.md#applypurchasetags) - Aplicar etiquetas a compras

### [Reports](docs/sdks/reports/README.md)

* [query](docs/sdks/reports/README.md#query) - Consultar reporte

### [Sales](docs/sdks/sales/README.md)

* [list](docs/sdks/sales/README.md#list) - Listar ventas
* [create](docs/sdks/sales/README.md#create) - Crear venta
* [getSaleById](docs/sdks/sales/README.md#getsalebyid) - Obtener venta por ID
* [patchMetadata](docs/sdks/sales/README.md#patchmetadata) - Actualizar metadatos de venta

### [SaleTags](docs/sdks/saletags/README.md)

* [apply](docs/sdks/saletags/README.md#apply) - Aplicar etiquetas a ventas

### [StockMovements](docs/sdks/stockmovements/README.md)

* [createStockMovement](docs/sdks/stockmovements/README.md#createstockmovement) - Crear movimiento de stock

### [StockTransfers](docs/sdks/stocktransfers/README.md)

* [listStockTransfers](docs/sdks/stocktransfers/README.md#liststocktransfers) - Listar transferencias de stock
* [createStockTransfer](docs/sdks/stocktransfers/README.md#createstocktransfer) - Crear transferencia de stock
* [getStockTransferById](docs/sdks/stocktransfers/README.md#getstocktransferbyid) - Obtener transferencia por ID

### [SupplierPayments](docs/sdks/supplierpayments/README.md)

* [listSupplierPayments](docs/sdks/supplierpayments/README.md#listsupplierpayments) - Listar pagos a proveedores
* [createSupplierPayment](docs/sdks/supplierpayments/README.md#createsupplierpayment) - Crear pago a proveedor
* [getSupplierPayment](docs/sdks/supplierpayments/README.md#getsupplierpayment) - Obtener pago a proveedor
* [voidSupplierPayment](docs/sdks/supplierpayments/README.md#voidsupplierpayment) - Anular pago a proveedor

### [Suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - Listar proveedores
* [createSupplier](docs/sdks/suppliers/README.md#createsupplier) - Crear proveedor
* [getSupplier](docs/sdks/suppliers/README.md#getsupplier) - Obtener proveedor
* [updateSupplier](docs/sdks/suppliers/README.md#updatesupplier) - Actualizar proveedor
* [applySupplierTags](docs/sdks/suppliers/README.md#applysuppliertags) - Aplicar etiquetas a proveedores

### [Tags](docs/sdks/tags/README.md)

* [listTags](docs/sdks/tags/README.md#listtags) - Listar etiquetas
* [createTag](docs/sdks/tags/README.md#createtag) - Crear etiqueta
* [updateTag](docs/sdks/tags/README.md#updatetag) - Actualizar etiqueta

### [Warehouses](docs/sdks/warehouses/README.md)

* [list](docs/sdks/warehouses/README.md#list) - Listar depósitos
* [create](docs/sdks/warehouses/README.md#create) - Crear depósito
* [getWarehouseById](docs/sdks/warehouses/README.md#getwarehousebyid) - Obtener depósito por ID
* [updateWarehouse](docs/sdks/warehouses/README.md#updatewarehouse) - Actualizar depósito

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`categoriesCreate`](docs/sdks/categories/README.md#create) - Crear categoría
- [`categoriesGet`](docs/sdks/categories/README.md#get) - Listar categorías
- [`categoriesGetById`](docs/sdks/categories/README.md#getbyid) - Obtener categoría
- [`categoriesUpdateCategory`](docs/sdks/categories/README.md#updatecategory) - Actualizar categoría
- [`customerPaymentsCreateCustomerPayment`](docs/sdks/customerpayments/README.md#createcustomerpayment) - Crear cobranza de cliente
- [`customerPaymentsGetCustomerPayment`](docs/sdks/customerpayments/README.md#getcustomerpayment) - Obtener cobranza de cliente
- [`customerPaymentsListCustomerPayments`](docs/sdks/customerpayments/README.md#listcustomerpayments) - Listar cobranzas de clientes
- [`customerPaymentsVoid`](docs/sdks/customerpayments/README.md#void) - Anular cobranza de cliente
- [`customersApplyTags`](docs/sdks/customers/README.md#applytags) - Aplicar etiquetas a clientes
- [`customersCreate`](docs/sdks/customers/README.md#create) - Crear cliente
- [`customersGet`](docs/sdks/customers/README.md#get) - Listar clientes
- [`customersGetCustomerById`](docs/sdks/customers/README.md#getcustomerbyid) - Obtener cliente por ID
- [`customersUpdateCustomer`](docs/sdks/customers/README.md#updatecustomer) - Actualizar cliente
- [`fulfillmentOrdersCancelFulfillmentOrder`](docs/sdks/fulfillmentorders/README.md#cancelfulfillmentorder) - Cancelar orden de preparación
- [`fulfillmentOrdersStart`](docs/sdks/fulfillmentorders/README.md#start) - Iniciar orden de preparación
- [`fulfillmentsCreateFulfillment`](docs/sdks/fulfillments/README.md#createfulfillment) - Crear fulfillment
- [`fulfillmentsVoidFulfillment`](docs/sdks/fulfillments/README.md#voidfulfillment) - Anular fulfillment
- [`inventoryListInventory`](docs/sdks/inventory/README.md#listinventory) - Consultar inventario por depósito
- [`inventoryListInventoryMovements`](docs/sdks/inventory/README.md#listinventorymovements) - Listar movimientos de inventario
- [`ordersCancel`](docs/sdks/orders/README.md#cancel) - Cancelar pedido
- [`ordersChangeFulfillmentLocation`](docs/sdks/orders/README.md#changefulfillmentlocation) - Cambiar ubicación de preparación
- [`ordersComplete`](docs/sdks/orders/README.md#complete) - Completar pedido
- [`ordersCreateOrder`](docs/sdks/orders/README.md#createorder) - Crear pedido
- [`ordersDeleteArchived`](docs/sdks/orders/README.md#deletearchived) - Eliminar pedido archivado
- [`ordersGetOrderById`](docs/sdks/orders/README.md#getorderbyid) - Obtener pedido
- [`ordersInvoice`](docs/sdks/orders/README.md#invoice) - Facturar pedido
- [`ordersListFulfillmentOrders`](docs/sdks/orders/README.md#listfulfillmentorders) - Listar órdenes de preparación del pedido
- [`ordersListOrders`](docs/sdks/orders/README.md#listorders) - Listar pedidos
- [`ordersPackage`](docs/sdks/orders/README.md#package) - Empaquetar pedido
- [`ordersPrepare`](docs/sdks/orders/README.md#prepare) - Preparar pedido
- [`ordersUnarchive`](docs/sdks/orders/README.md#unarchive) - Desarchivar pedido
- [`ordersUnprepare`](docs/sdks/orders/README.md#unprepare) - Revertir preparación del pedido
- [`ordersUpdateOrderNotes`](docs/sdks/orders/README.md#updateordernotes) - Actualizar notas del pedido
- [`paymentMethodsCreate`](docs/sdks/paymentmethods/README.md#create) - Crear método de pago
- [`paymentMethodsGet`](docs/sdks/paymentmethods/README.md#get) - Obtener método de pago
- [`paymentMethodsList`](docs/sdks/paymentmethods/README.md#list) - Listar métodos de pago
- [`paymentMethodsUpdatePaymentMethod`](docs/sdks/paymentmethods/README.md#updatepaymentmethod) - Actualizar método de pago
- [`pointsOfSaleListPointsOfSale`](docs/sdks/pointsofsale/README.md#listpointsofsale) - Listar puntos de venta
- [`priceListsCreatePriceList`](docs/sdks/pricelists/README.md#createpricelist) - Crear lista de precios
- [`priceListsGet`](docs/sdks/pricelists/README.md#get) - Listar listas de precios
- [`priceListsGetPriceListById`](docs/sdks/pricelists/README.md#getpricelistbyid) - Obtener lista de precios por ID
- [`priceListsUpdatePriceList`](docs/sdks/pricelists/README.md#updatepricelist) - Actualizar lista de precios
- [`productBulkAdjustmentsCreate`](docs/sdks/productbulkadjustments/README.md#create) - Ajustar productos en lote
- [`productsApplyProductTags`](docs/sdks/products/README.md#applyproducttags) - Aplicar etiquetas a productos
- [`productsCreate`](docs/sdks/products/README.md#create) - Crear producto
- [`productsGetProductById`](docs/sdks/products/README.md#getproductbyid) - Obtener producto por ID
- [`productsList`](docs/sdks/products/README.md#list) - Listar productos
- [`productsUpdate`](docs/sdks/products/README.md#update) - Actualizar producto
- [`purchaseOrdersClose`](docs/sdks/purchaseorders/README.md#close) - Cerrar orden de compra
- [`purchaseOrdersConfirm`](docs/sdks/purchaseorders/README.md#confirm) - Confirmar orden de compra
- [`purchaseOrdersCreatePurchaseOrder`](docs/sdks/purchaseorders/README.md#createpurchaseorder) - Crear orden de compra
- [`purchaseOrdersGetPurchaseOrderById`](docs/sdks/purchaseorders/README.md#getpurchaseorderbyid) - Obtener orden de compra por ID
- [`purchaseOrdersListPurchaseOrders`](docs/sdks/purchaseorders/README.md#listpurchaseorders) - Listar órdenes de compra
- [`purchaseOrdersReceiptsReceive`](docs/sdks/receipts/README.md#receive) - Recibir orden de compra
- [`purchaseOrdersReopen`](docs/sdks/purchaseorders/README.md#reopen) - Reabrir orden de compra
- [`purchasesApplyPurchaseTags`](docs/sdks/purchases/README.md#applypurchasetags) - Aplicar etiquetas a compras
- [`purchasesCreatePurchase`](docs/sdks/purchases/README.md#createpurchase) - Crear compra
- [`purchasesGetPurchaseById`](docs/sdks/purchases/README.md#getpurchasebyid) - Obtener compra por ID
- [`purchasesListPurchases`](docs/sdks/purchases/README.md#listpurchases) - Listar compras
- [`reportsQuery`](docs/sdks/reports/README.md#query) - Consultar reporte
- [`salesCreate`](docs/sdks/sales/README.md#create) - Crear venta
- [`salesGetSaleById`](docs/sdks/sales/README.md#getsalebyid) - Obtener venta por ID
- [`salesList`](docs/sdks/sales/README.md#list) - Listar ventas
- [`salesPatchMetadata`](docs/sdks/sales/README.md#patchmetadata) - Actualizar metadatos de venta
- [`saleTagsApply`](docs/sdks/saletags/README.md#apply) - Aplicar etiquetas a ventas
- [`stockMovementsCreateStockMovement`](docs/sdks/stockmovements/README.md#createstockmovement) - Crear movimiento de stock
- [`stockTransfersCreateStockTransfer`](docs/sdks/stocktransfers/README.md#createstocktransfer) - Crear transferencia de stock
- [`stockTransfersGetStockTransferById`](docs/sdks/stocktransfers/README.md#getstocktransferbyid) - Obtener transferencia por ID
- [`stockTransfersListStockTransfers`](docs/sdks/stocktransfers/README.md#liststocktransfers) - Listar transferencias de stock
- [`supplierPaymentsCreateSupplierPayment`](docs/sdks/supplierpayments/README.md#createsupplierpayment) - Crear pago a proveedor
- [`supplierPaymentsGetSupplierPayment`](docs/sdks/supplierpayments/README.md#getsupplierpayment) - Obtener pago a proveedor
- [`supplierPaymentsListSupplierPayments`](docs/sdks/supplierpayments/README.md#listsupplierpayments) - Listar pagos a proveedores
- [`supplierPaymentsVoidSupplierPayment`](docs/sdks/supplierpayments/README.md#voidsupplierpayment) - Anular pago a proveedor
- [`suppliersApplySupplierTags`](docs/sdks/suppliers/README.md#applysuppliertags) - Aplicar etiquetas a proveedores
- [`suppliersCreateSupplier`](docs/sdks/suppliers/README.md#createsupplier) - Crear proveedor
- [`suppliersGetSupplier`](docs/sdks/suppliers/README.md#getsupplier) - Obtener proveedor
- [`suppliersList`](docs/sdks/suppliers/README.md#list) - Listar proveedores
- [`suppliersUpdateSupplier`](docs/sdks/suppliers/README.md#updatesupplier) - Actualizar proveedor
- [`tagsCreateTag`](docs/sdks/tags/README.md#createtag) - Crear etiqueta
- [`tagsListTags`](docs/sdks/tags/README.md#listtags) - Listar etiquetas
- [`tagsUpdateTag`](docs/sdks/tags/README.md#updatetag) - Actualizar etiqueta
- [`warehousesCreate`](docs/sdks/warehouses/README.md#create) - Crear depósito
- [`warehousesGetWarehouseById`](docs/sdks/warehouses/README.md#getwarehousebyid) - Obtener depósito por ID
- [`warehousesList`](docs/sdks/warehouses/README.md#list) - Listar depósitos
- [`warehousesUpdateWarehouse`](docs/sdks/warehouses/README.md#updatewarehouse) - Actualizar depósito

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.suppliers.list({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.suppliers.list({});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`LapymeError`](./src/models/errors/lapyme-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Lapyme } from "lapyme";
import * as errors from "lapyme/models/errors";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await lapyme.suppliers.list({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.LapymeError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ApiErrorEnvelope) {
        console.log(error.data$.requestId); // string
        console.log(error.data$.error); // models.ErrorT
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`LapymeError`](./src/models/errors/lapyme-error.ts): The base class for HTTP error responses.
  * [`ApiErrorEnvelope`](./src/models/errors/api-error-envelope.ts): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`LapymeError`](./src/models/errors/lapyme-error.ts)**:
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  serverURL: "https://api.lapyme.com.ar",
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.suppliers.list({});

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Lapyme } from "lapyme";
import { ProxyAgent } from "undici";
import { HTTPClient } from "lapyme/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Lapyme({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Lapyme } from "lapyme";

const sdk = new Lapyme({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LAPYME_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Versioning

Pin the SDK to a specific package version in production applications. This keeps installs reproducible and lets you adopt SDK updates intentionally.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=lapyme&utm_campaign=typescript)
