import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyyU1OwVjz1NsTgOD91KrM4O/ty27b2KI9k0+9LmnMjNtewnDCB1QkRyF8S8cQujXIRNHuBPqslOvoDgFeMDBPoFch0zyo+PfVduuJ0MkjsAxoQXuxbbvl+cNM4u3E+Xn1Qr/FrWK8sxp23aZw1D+jbA31+fwWzX75m1L0wSrhj0g/H2JY1R3zcuwupfjIyGF5qwnOE3SBbbuU22YtiZBJQZ5hwzv/pRdeFIe48XGL9l5C6L73Qi2qopwHM198RausUeLfcTk6xSjCH1MnTIaHvsAtO2fNjT+1Vq0hzINxnUWFJWw4NMTTSJ5220Oewb2Sz2IJTFNBKzOcezFeaCLeQIDAQAB'
// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}
