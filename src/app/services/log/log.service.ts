/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogLevel } from '../../models/log-level';


export class LogEntry {
  entryDate = new Date();
  message = '';
  level = LogLevel.Debug;
  extraInfo: any[] = [];
  logWithDate = true;

  buildLogString(): string {
    let ret = '';

    if (this.logWithDate) {
      ret = new Date() + ' - ';
    }

    ret += LogLevel[this.level];
    ret += ' - ' + this.message;
    if (this.extraInfo.length) {
      ret += ' - ' + this.formatParams(this.extraInfo);
    }

    return ret;
  }

  private formatParams(params: any[]): string {
    let ret = params.join(',');

    if (params.some(p => typeof p == 'object')) {
      ret = '';

      for (const item of params) {
        ret += JSON.stringify(item) + ',';
      }
    }

    return ret;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  level = environment.logLevel;
  logWithDate = false;

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      const entry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      console.log(entry.buildLogString());
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return (level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All;
  }

}
