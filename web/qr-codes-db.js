// Simple QR codes database simulation
let qrCodes = [];
let nextId = 1;

export const QRCodesDB = {
  list: async (shopDomain) => {
    return qrCodes.filter(qr => qr.shopDomain === shopDomain);
  },

  create: async (data) => {
    const qrCode = {
      id: nextId++,
      ...data,
      createdAt: new Date().toISOString(),
    };
    qrCodes.push(qrCode);
    return qrCode;
  },

  read: async (id) => {
    const qrCode = qrCodes.find(qr => qr.id === parseInt(id));
    if (!qrCode) {
      throw new Error("QR Code not found");
    }
    return qrCode;
  },

  update: async (id, data) => {
    const index = qrCodes.findIndex(qr => qr.id === parseInt(id));
    if (index === -1) {
      throw new Error("QR Code not found");
    }
    qrCodes[index] = { ...qrCodes[index], ...data };
    return qrCodes[index];
  },

  delete: async (id) => {
    const index = qrCodes.findIndex(qr => qr.id === parseInt(id));
    if (index === -1) {
      throw new Error("QR Code not found");
    }
    qrCodes.splice(index, 1);
  },
};
