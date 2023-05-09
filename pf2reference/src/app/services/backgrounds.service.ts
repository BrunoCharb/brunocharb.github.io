import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { PostgrestResponse } from '@supabase/supabase-js';
import { Backgrounds } from '../models/backgrounds';

@Injectable({
  providedIn: 'root'
})
export class BackgroundsService {

  constructor(private supaService: SupabaseService) { }

  public async getAllBackgrounds(): Promise<PostgrestResponse<Backgrounds>>{
    return (await this.supaService.supabaseClient.from('backgrounds').select('*').order('name'));
  }
}
