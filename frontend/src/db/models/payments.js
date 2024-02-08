import { DataTypes } from 'sequelize';
import sequelize from '../connector.js';
import { Users } from './users.js';
import { Items } from './products.js';

export const Baskets = sequelize.define(
    'Baskets',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'baskets',
        timestamps: false
    }
);

export const BasketItems = sequelize.define(
    'BasketItems',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        basketId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        tableName: 'basket_items',
        timestamps: false
    }
);

export const PaymentTypes = sequelize.define(
    'PaymentTypes',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'payment_types',
        timestamps: false
    }
);

export const PaymentConfirmations = sequelize.define(
    'PaymentConfirmations',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        basketId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        info: {
            type: DataTypes.JSON
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'payment_confirmations',
        timestamps: false
    }
);

Baskets.belongsTo(Users, { foreignKey: 'userId' });
Users.hasMany(Baskets, { foreignKey: 'userId' });

BasketItems.belongsTo(Baskets, { foreignKey: 'basketId' });
Baskets.hasMany(BasketItems, { foreignKey: 'basketId' });

BasketItems.belongsTo(Items, { foreignKey: 'productId' });
Items.hasMany(BasketItems, { foreignKey: 'productId' });

Baskets.hasOne(PaymentConfirmations, { foreignKey: 'basketId' });
PaymentConfirmations.belongsTo(Baskets, { foreignKey: 'basketId' });

PaymentConfirmations.hasOne(PaymentTypes, { foreignKey: 'paymentTypeId' });
PaymentTypes.hasMany(PaymentConfirmations, { foreignKey: 'paymentTypeId' });