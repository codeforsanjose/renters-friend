# frozen_string_literal: true

class RentersRightsController < ApplicationController
  layout "renters_rights"

  def index
  end

  def about
  end

  def eviction
  end

  def rent_increase
  end
   
  def report_issue
  end
   
  def find_jurisdiction
  end

  def resources
  end

  def rent_calculator
  end

  def legal_aid
  end
  
  def shelter
  end

  def email
  end

  private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end

end
