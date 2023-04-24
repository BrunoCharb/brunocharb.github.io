import { Injectable } from '@angular/core';
import {SupabaseService} from "./supabase.service";
import {PostgrestResponse} from "@supabase/supabase-js";
import {Class_feat} from "../models/class_feat";

@Injectable({
  providedIn: 'root'
})
export class FeatsService {

  constructor(private supaService: SupabaseService) { }

  public async getFeatsWithTraits(trait: string | undefined): Promise<PostgrestResponse<Class_feat>>{
    let universal = 'All Ancestries'
    return this.supaService.supabaseClient.from('feats').select('*').or(`traits.cs.{${trait}}`).order('level').order('name');
  }

  public async getAncestryFeatsWithTraits(trait: string | undefined): Promise<PostgrestResponse<Class_feat>>{
    let universal = 'All Ancestries'
    return this.supaService.supabaseClient.from('feats').select('*').or(`traits.cs.{${trait}}, or (traits.cs.{${universal}})`).order('level').order('name');
  }
}
