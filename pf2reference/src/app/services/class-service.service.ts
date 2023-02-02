import { Injectable } from '@angular/core';
import {SupabaseService} from './supabase.service';
import {PostgrestResponse} from '@supabase/supabase-js';
import {Character_classes} from '../models/character_classes';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  constructor( private supaService: SupabaseService) { }

  public async getAllClasses(): Promise<PostgrestResponse<Character_classes>> {
    return this.supaService.supabaseClient.from('character_classes').select('*');
  }
}
