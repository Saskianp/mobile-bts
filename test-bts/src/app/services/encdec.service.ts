import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncdecService {
  constructor() {}

  private encPass: string = 'PobR4harJ4202209';
  private encIV: string = '';

  public encrypt(clearText: string): string {
    let key = CryptoJS.enc.Utf8.parse(this.encPass);
    let iv = CryptoJS.enc.Utf8.parse(this.encIV);
    let enc = CryptoJS.AES.encrypt(clearText, key, {
      keySize: 128,
      iv: iv,
      mode: CryptoJS.mode.ECB,
    });
    return enc.toString(CryptoJS.format.OpenSSL);
  }

  public decrypt(encryptedText: string): string {
    let key = CryptoJS.enc.Utf8.parse(this.encPass);
    let iv = CryptoJS.enc.Utf8.parse(this.encIV);
    let dec = CryptoJS.AES.decrypt(encryptedText, key, {
      keySize: 128,
      iv: iv,
      mode: CryptoJS.mode.ECB,
    });
    return dec.toString(CryptoJS.enc.Utf8);
  }

  /**
   * * keur nga hash make md5
   * @param clearText text anu rek di hash na
   * @returns hasil text anu geus di hash
   */
  public md5(clearText: string): string {
    return CryptoJS.MD5(clearText).toString();
  }
}