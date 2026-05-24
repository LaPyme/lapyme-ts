# La Pyme SDK examples

This directory contains authored example scripts for the official `lapyme`
TypeScript SDK.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Edit `.env` and add your API key and any IDs required by the workflow.

## Running the Examples

To run an example file from the examples directory:

```bash
npm run build && npx tsx 01-check-credentials.ts
```

## Examples

- `01-check-credentials.ts`: verify the API key with a read-only request.
- `02-create-customer.ts`: create a customer with a stable idempotency key.
- `03-create-sale.ts`: create a sale with line items and retry-safe idempotency.
- `04-create-purchase-order-and-receive.ts`: create, confirm, and receive a purchase order.
- `05-run-sales-report.ts`: query a sales report.
- `06-handle-errors-and-retries.ts`: inspect structured API errors and retry safely.

Generated examples may also exist in this folder. New authored examples are not
overwritten by SDK generation.
