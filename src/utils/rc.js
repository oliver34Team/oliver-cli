import { RC, DEFAULTS } from './constants';
import { decode, encode } from 'ini';
import { promisify } from 'util';
import chalk from 'chalk';
import fs from 'fs';
