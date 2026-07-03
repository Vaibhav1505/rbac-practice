const Lead = require('../models/lead.model');

const createLead = async (req, res) => {
    const { name, company, status } = req.body;

    if (!name || !company || !status) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the required field"
        })
    }

    const createdLeads = await Lead.create({name,company,status,createdBy:req.user.id});


    res.status(201).json({
        success: true,
        message: "Lead created successfully"
    })
}

const getLeads = async (req, res) => {
    const { id } = req.user;

    const leads = await Lead.find();

    if (!leads) {
        return res.status(404).json({
            success: false,
            message: "No Leads found"
        })
    }

    res.status(200).json({
        success: true,
        leads: leads
    })
}

const updateLead = async () => {
}

const deleteLead = async () => {
}

module.exports = {
    createLead, getLeads, updateLead, deleteLead
}