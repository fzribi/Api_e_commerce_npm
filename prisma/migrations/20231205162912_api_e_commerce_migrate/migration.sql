-- CreateTable
CREATE TABLE "Products" (
    "product_UUID" VARCHAR(36) NOT NULL,
    "product_name" VARCHAR(20) NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_uuid" PRIMARY KEY ("product_UUID")
);

-- CreateTable
CREATE TABLE "Users" (
    "user_UUID" VARCHAR(36) NOT NULL,
    "user_pseudo" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "user_password" VARCHAR(72) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_uuid" PRIMARY KEY ("user_UUID")
);

-- CreateTable
CREATE TABLE "Orders" (
    "order_number" SERIAL NOT NULL,
    "order_total_cost_ht" VARCHAR(36) NOT NULL,
    "order_total_quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliver_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("order_number")
);

-- CreateTable
CREATE TABLE "OrdersOnProducts" (
    "order_number" INTEGER NOT NULL,
    "product_UUID" TEXT NOT NULL,

    CONSTRAINT "OrdersOnProducts_pkey" PRIMARY KEY ("order_number","product_UUID")
);

-- CreateTable
CREATE TABLE "OrdersOnUsers" (
    "order_number" INTEGER NOT NULL,
    "user_UUID" TEXT NOT NULL,

    CONSTRAINT "OrdersOnUsers_pkey" PRIMARY KEY ("order_number","user_UUID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_UUID_key" ON "Products"("product_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_UUID_key" ON "Users"("user_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_order_number_key" ON "Orders"("order_number");

-- AddForeignKey
ALTER TABLE "OrdersOnProducts" ADD CONSTRAINT "OrdersOnProducts_order_number_fkey" FOREIGN KEY ("order_number") REFERENCES "Orders"("order_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersOnProducts" ADD CONSTRAINT "OrdersOnProducts_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("product_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersOnUsers" ADD CONSTRAINT "OrdersOnUsers_order_number_fkey" FOREIGN KEY ("order_number") REFERENCES "Orders"("order_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdersOnUsers" ADD CONSTRAINT "OrdersOnUsers_user_UUID_fkey" FOREIGN KEY ("user_UUID") REFERENCES "Users"("user_UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
