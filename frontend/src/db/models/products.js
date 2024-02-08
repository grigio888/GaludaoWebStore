import { DataTypes } from 'sequelize';
import sequelize from '../connector.js';

export const Heroes = sequelize.define(
    'Heroes',
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
        imageUrl: {
            type: DataTypes.STRING,
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
        tableName: 'heroes',
        timestamps: false
    }
);

export const Rarity = sequelize.define(
    'Rarity',
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
        color: {
            type: DataTypes.STRING,
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
        tableName: 'rarities',
        timestamps: false
    }
);

export const Items = sequelize.define(
    'Items',
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
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        isOffer: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        steamId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        steamPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        heroId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rarityId: {
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
        tableName: 'items',
        timestamps: false
    }
);

Heroes.hasMany(Items, { foreignKey: 'heroId' });
Items.belongsTo(Heroes, { foreignKey: 'heroId' });

Rarity.hasMany(Items, { foreignKey: 'rarityId' });
Items.belongsTo(Rarity, { foreignKey: 'rarityId' });